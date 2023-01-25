#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;
use tauri::scope::FsScope;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn allow_file_wrapper(path: String) {
    println!("File path {}", path);
    // FsScope::allow_file(FsScope, path);

    // println!("In file {}", path);
    // let contents = fs::read_to_string(path).expect("Should have been able to read the file");
    // println!("With text:\n{contents}");
}

#[tauri::command]
fn read_file(path: String) -> String {
    fs::read_to_string(path).expect("Should have been able to read the file")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![allow_file_wrapper])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
