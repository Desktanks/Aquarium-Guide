import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export async function search_products(filters = {}) {
  const filePath = path.join(process.cwd(), 'data', 'links.csv');
  const rows = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => rows.push(row))
      .on('end', () => {
        let results = rows.filter(
          (r) => r.category.toLowerCase() === (filters.category || '').toLowerCase()
        );

        // Optional filters
        if (filters.volume_gal)
          results = results.filter(
            (r) =>
              Math.abs(Number(r.volume_gal || 0) - filters.volume_gal) <= 1
          );

        if (filters.is_kit !== undefined)
          results = results.filter(
            (r) =>
              String(r.is_kit).toLowerCase() ===
              String(filters.is_kit).toLowerCase()
          );

        if (filters.use_cases?.length)
          results = results.filter((r) =>
            filters.use_cases.some((u) =>
              (r.use_cases || '').toLowerCase().includes(u.toLowerCase())
            )
          );

        results.sort((a, b) => Number(a.priority) - Number(b.priority));
        resolve(results);
      })
      .on('error', reject);
  });
}
