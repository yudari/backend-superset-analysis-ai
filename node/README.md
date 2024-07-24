- jalankan perintah git clone https://github.com/yudari/backend-superset-analysis-ai/
- jalankan perintah git checkout nama_branch
- ubah .env_example menjadi .env
- jalankan perintah npm install
- lalu misalnya belum ada docker yang terinstall, wajib install:
    - docker
    - docker compose
- jika menggunakan vscode buka terminal bawaannya, lalu ketik 'docker compose build', nanti akan membuild semua images dan container yang sudah disetting didalam file docker-compose.yml
- kemudian setelah proses build selesai, maka jalankan perintah 'docker compose start'
- finish

*note*
- database yang digunakan didalam project ini masih menggunakan database superset development
- jika ingin mengganti connection databasenya settingannya berada didalam docker-compose.yml dan .env

