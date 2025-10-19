/**
 * search_products.js
 * Aquaria utility to read and filter product data from data/links.csv
 * ---------------------------------------------------------------
 * Reads the CSV file, applies category + optional filters
 * (volume_gal, is_kit), and returns sorted results by priority.
 */

import fs from "fs";
import path from "path";
import csv from "csv-parser";

/**
 * Search products in links.csv with optional filters.
 * @param {Object} filters
 * @param {string} filters.category - required (e.g. "Tank", "Filter")
 * @param {number} [filters.volume_gal] - optional (e.g. 3, 5, 10)
 * @param {boolean} [filters.is_kit] - optional flag for starter kits
 * @returns {Promise<Object[]>} - filtered and sorted product rows
 */
export async function search_products(filters = {}) {
  const filePath = path.join(process.cwd(), "data", "links.csv");
  const rows = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => rows.push(row))
      .on("end", () => {
        let results = rows;

        // 1️⃣ Filter by category
        if (filters.category) {
          results = results.filter(
            (r) =>
              (r.category || "").toLowerCase() ===
              filters.category.toLowerCase()
          );
        }

        // 2️⃣ Filter by approximate tank size (±1 gal tolerance)
        if (typeof filters.volume_gal === "number") {
          results = results.filter((r) => {
            const vol = parseFloat(r.volume_gal || 0);
            return !isNaN(vol) && Math.abs(vol - filters.volume_gal) <= 1;
          });
        }

        // 3️⃣ Filter by kit flag (TRUE/FALSE)
        if (typeof filters.is_kit === "boolean") {
          results = results.filter(
            (r) =>
              String(r.is_kit || "").toLowerCase() ===
              String(filters.is_kit).toLowerCase()
          );
        }

        // 4️⃣ Sort by priority (ascending)
        results.sort(
          (a, b) => Number(a.priority || 999) - Number(b.priority || 999)
        );

        resolve(results);
      })
      .on("error", reject);
  });
}
