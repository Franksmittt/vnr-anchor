import os

# Root project path for tree + output
project_root = r"C:\Users\shop\Downloads\vnrjuly-main (1)\vnrjuly-main"

# Output file
output_file = os.path.join(project_root, "compiled_output.txt")

# Folders to exclude everywhere (tree + walking)
exclude_dirs = {"node_modules", ".next", "public"}

# Files to exclude from content dump (avoid recursion / noise)
exclude_files = {"compile_files.py", "compiled_output.txt"}

# Targets to include for the path→code dump (sensible selection, no 'public')
targets = [
    os.path.join(project_root, "tsconfig.json"),
    os.path.join(project_root, "next-env.d.ts"),
    os.path.join(project_root, "package.json"),
    os.path.join(project_root, "package-lock.json"),
    os.path.join(project_root, "postcss.config.js"),
    os.path.join(project_root, "eslint.config.mjs"),
    os.path.join(project_root, "jsconfig.json"),
    os.path.join(project_root, "next.config.mjs"),
    os.path.join(project_root, "tailwind.config.ts"),
    os.path.join(project_root, "README.md"),
    os.path.join(project_root, ".gitignore"),
    os.path.join(project_root, "app"),
    os.path.join(project_root, "components"),
    os.path.join(project_root, "data"),
]


def build_tree(start_path, prefix=""):
    """Return a formatted directory tree string (excluding unwanted folders)."""
    try:
        entries = sorted(os.listdir(start_path))
    except Exception:
        return ""

    filtered = []
    for e in entries:
        if e in exclude_dirs:
            continue
        filtered.append(e)

    tree_str = ""
    for i, entry in enumerate(filtered):
        path = os.path.join(start_path, entry)
        connector = "└── " if i == len(filtered) - 1 else "├── "
        tree_str += prefix + connector + entry + "\n"
        if os.path.isdir(path):
            extension = "    " if i == len(filtered) - 1 else "│   "
            tree_str += build_tree(path, prefix + extension)
    return tree_str


def write_file_content(f, path):
    """Write file path and its contents to output file (best-effort text read)."""
    f.write(f"\n--- PATH: {path} ---\n")
    try:
        if os.path.basename(path) in exclude_files:
            f.write("[Skipped by rule]\n")
            return
        with open(path, "r", encoding="utf-8", errors="ignore") as infile:
            content = infile.read()
        f.write(content + "\n")
    except Exception as e:
        f.write(f"[Error reading file: {e}]\n")


def walk_directory(f, dir_path):
    """Recursively walk a directory and write all files (excluding heavy dirs)."""
    for root, dirs, files in os.walk(dir_path):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file in exclude_files:
                continue
            file_path = os.path.join(root, file)
            write_file_content(f, file_path)


def main():
    os.makedirs(project_root, exist_ok=True)

    with open(output_file, "w", encoding="utf-8") as f:
        # 1) Project tree
        f.write("=== PROJECT TREE (excluding node_modules, .next, public) ===\n")
        f.write(project_root + "\n")
        f.write(build_tree(project_root))

        # 2) File contents for selected targets
        f.write("\n\n=== FILE CONTENTS (selected targets) ===\n")
        for target in targets:
            if os.path.isdir(target):
                walk_directory(f, target)
            elif os.path.isfile(target):
                write_file_content(f, target)
            else:
                f.write(f"\n--- PATH: {target} ---\n[Not found]\n")

    print(f"Project tree and contents compiled into: {output_file}")


if __name__ == "__main__":
    main()
