// استيراد الدوال الأساسية من Firebase عبر CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// بيانات مشروعك التي نسختها
const firebaseConfig = {
  apiKey: "AIzaSyD_aF2BGwwHKa5EZ11yCDScIxzv3JcEyrg",
  authDomain: "sayed-sadiq.firebaseapp.com",
  databaseURL: "https://sayed-sadiq-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sayed-sadiq",
  storageBucket: "sayed-sadiq.firebasestorage.app",
  messagingSenderId: "79832689735",
  appId: "1:79832689735:web:79902cc841039615d05562",
  measurementId: "G-CZ9HPEPFSN"
};

// تهيئة المشروع
const app = initializeApp(firebaseConfig);

// تصدير قاعدة البيانات لاستخدامها في ملفات أخرى
export const db = getDatabase(app);