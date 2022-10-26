async function scrInv() {
  window.scrollTo(0, window.scrollY++);
  while (window.scrollY < 800) {
    await new Promise((r) => setTimeout(r, 0.1));
    window.scrollTo(0, (window.scrollY += 10));
  }
}
