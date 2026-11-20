import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve } from 'path';

const htmlPath = resolve('public/Resume_Rituraj_Kumar.html');
const pdfPath = resolve('public/Resume_Rituraj_Kumar.pdf');

const browsers = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'google-chrome',
  'chromium',
  'chrome'
];

let browserPath = browsers.find((b) => {
  try {
    return existsSync(b);
  } catch {
    return false;
  }
});

if (browserPath) {
  try {
    console.log(`Generating Resume PDF from ${htmlPath}...`);
    execSync(
      `"${browserPath}" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`,
      { stdio: 'inherit' }
    );
    console.log('Successfully generated public/Resume_Rituraj_Kumar.pdf');
  } catch (err) {
    console.warn('PDF generation warning (fallback to existing PDF):', err.message);
  }
} else {
  console.log('No Chrome/Edge browser found for automated PDF generation; using existing public/Resume_Rituraj_Kumar.pdf');
}
