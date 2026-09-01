const COIN_BACK = `
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="31" fill="#111"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="#f8f4f3" stroke-width="3"/>
    <circle cx="32" cy="32" r="14" fill="none" stroke="#f8f4f3" stroke-width="2" opacity="0.55"/>
  </svg>
`;

export function brandCoinMarkup(size = 'sm') {
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.svg`;
  const sizeClass = size === 'lg' ? ' sg-coin--lg' : '';

  return `
    <div class="sg-coin${sizeClass}" aria-hidden="true">
      <div class="sg-coin__scene">
        <div class="sg-coin__spin">
          <div class="sg-coin__face sg-coin__face--front">
            <img src="${logoSrc}" alt="" width="64" height="64" decoding="async" />
          </div>
          <div class="sg-coin__face sg-coin__face--back">${COIN_BACK}</div>
        </div>
      </div>
    </div>
  `;
}

export function mountBrandCoins() {
  document.querySelectorAll('[data-sg-coin]').forEach((node) => {
    const size = node.dataset.sgCoin === 'lg' ? 'lg' : 'sm';
    node.innerHTML = brandCoinMarkup(size);
  });
}
