# PicFit

This repository provides a simple Chromium extension called **Auto Image Fit**. The extension automatically scales and centers standalone images so that they fit the browser viewport.

## How it works

When a tab loads a single image file, the extension injects a content script that adjusts page styles. The image is scaled to the available width or height while keeping its aspect ratio and centered within the viewport.

## Install in developer mode

1. Open `chrome://extensions` in a Chromium-based browser.
2. Enable **Developer mode**.
3. Choose **Load unpacked** and select the `extension` directory from this repository.

## Package the extension

To distribute the extension, zip the contents of the `extension` directory and upload the archive to the Chrome Web Store or any other distribution channel.
