// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn log_command(command: String) -> String {
    println!("Comando recebido no backend: {}", command);
    format!("Comando '{}' registrado com sucesso!", command)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, log_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
