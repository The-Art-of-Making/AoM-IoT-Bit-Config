#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn read_file(path: String) -> String {
//     std::fs::read_to_string(path).expect("Should have been able to read the file")
// }

fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![read_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
