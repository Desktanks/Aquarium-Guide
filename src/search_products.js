/**
 * search_products.js
 * Aquaria utility to read and filter product data from data/links.csv
 * ---------------------------------------------------------------
 * Reads the CSV file, applies category + optional filters
 * (volume_gal, is_kit, flow_level, use_cases), and returns
 * sorted results by priority.
 */

import fs from "fs";
import path from "path";
import csv from "csv-parser";

/**
 * Search products in links.csv with optional filters.
 * @param {Object} filters - category and optional attributes
 * @param {string} filters.category - required (e.g. "Tank", "Filter")
 * @param {number} [filters.volume_gal] - e.g. 3, 5
 * @param {boolean} [filters.is_kit]
 * @param {string[]} [filters.use_cases] - e.g. ["betta", "shrimp"]
 * @param {string} [filters.flow_level] - e.g. "low", "medium", "high"
 * @returns {Promise<Object[]>} - filtered + sorted product rows
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

        // 1️⃣ Category (required)
        if (filters.category) {
          results = results.filter(
            (r) =>
              (r.category || "").toLowerCase() ===
              filters.category.toLowerCase()
          );
        }

        // 2️⃣ Volume (3–5 gallon, etc.)
        if (filters.volume_gal) {
          results = results.filter((r) => {
            const vol = parseFloat(r.volume_gal || 0);
            return !isNaN(vol) && Math.abs(vol - filters.volume_gal) <= 1;
          });
        }

        // 3️⃣ Starter kit or bare tank
        if (typeof filters.is_kit === "boolean") {
          results = results.filter(
            (r) =>
              String(r.is_kit || "").toLowerCase() ===
              String(filters.is_kit).toLowerCase()
          );
        }

        // 4️⃣ Flow level (low, medium, high)
        if (filters.flow_level) {
          results = results.filter(
            (r) =>
              (r.flow_level || "").toLowerCase() ===
              filters.flow_level.toLowerCase()
          );
        }

        // 5️⃣ Use cases (betta, shrimp, planted)
        if (Array.isArray(filters.use_cases) && filters.use_cases.length > 0) {
          results = results.filter((r) =>
            filters.use_cases.some((u) =>
              (r.use_cases || "").toLowerCase().includes(u.toLowerCase())
            )
          );
        }

        // 6️⃣ Sort by priority (ascending)
        results.sort(
          (a, b) => Number(a.priority || 999) - Number(b.priority || 999)
        );

        resolve(results);
      })
      .on("error", reject);
  });
}
