default:
    echo 'Hello, world!'

format:
    bunx @biomejs/biome format --write ./

lint:
    bunx @biomejs/biome lint ./

dev:
    bun --bun vite

build:
    bun --bun vite build

test:
    bun test