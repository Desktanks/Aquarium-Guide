# tools/convert_video_links.py
import csv, json, pathlib, re
from datetime import datetime

CSV_PATH = pathlib.Path("data/video_links.csv")
JSON_PATH = pathlib.Path("src/video_links.json")

# Any of these columns (if present) are passed through to JSON
OPTIONAL_FIELDS = ["pillar","content_type","search_intent","notes","status"]

def slugify(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def main():
    if not CSV_PATH.exists():
        raise SystemExit(f"Missing {CSV_PATH}; create it first.")

    rows = []
    with CSV_PATH.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        fieldnames = [h.strip() for h in (reader.fieldnames or [])]
        for r in reader:
            entry = {
                "intent": (r.get("intent") or "general").strip(),
                "keywords": [k.strip().lower() for k in (r.get("keywords") or "").split("|") if k.strip()],
                "question": (r.get("question") or "").strip(),
                "video_title": (r.get("video_title") or "").strip(),
                "video_url": (r.get("video_url") or "").strip(),
                "last_updated": (r.get("last_updated") or "").strip(),
                "id": slugify((r.get("question") or r.get("video_title") or "")),
            }
            for fopt in OPTIONAL_FIELDS:
                if fopt in fieldnames:
                    entry[fopt] = (r.get(fopt) or "").strip()
            rows.append(entry)

    out = {
        "version": "1.2",
        "generated_at": datetime.utcnow().isoformat(timespec="seconds") + "Z",
        "video_links": rows
    }
    JSON_PATH.parent.mkdir(parents=True, exist_ok=True)
    JSON_PATH.write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"✅ Wrote {JSON_PATH} with {len(rows)} entries.")

if __name__ == "__main__":
    main()
