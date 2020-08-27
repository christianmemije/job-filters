// ==UserScript==
// @name         LinkedIn jobs filter
// @description  Filter jobs based on title and company
// @namespace    https://greasyfork.org/en/users/673321-christianmemije
// @version      0.1.0
// @license      MIT
// @author       christianmemije
// @match        *://www.linkedin.com/*
// @grant        none
// @supportURL   https://github.com/christianmemije/jobfilters
// ==/UserScript==
(() => {
  // Configuration starts
  const desiredTitles: string[] = []; // e.g. ['front end', 'ui engineer']
  const undesiredTitles: string[] = []; // e.g. ['full stack', 'manager']
  const desiredCompanies: string[] = []; // e.g. ['Tesla', 'SpaceX']
  const undesiredCompanies: string[] = []; // e.g. ['Facebook', 'Amazon']
  // Configuration ends

  const debugMode: boolean = false;

  const desiredTitlesRegEx: RegExp = new RegExp(desiredTitles.join('|'), 'i');
  const undesiredTitlesRegEx: RegExp = new RegExp(
    undesiredTitles.join('|'),
    'i',
  );
  const desiredCompaniesRegEx: RegExp = new RegExp(
    desiredCompanies.join('|'),
    'i',
  );

  const undesiredCompaniesRegEx: RegExp = new RegExp(
    undesiredCompanies.join('|'),
    'i',
  );

  const jobTileSelector: string = 'li.artdeco-list__item';
  const jobTileTitleSelector: string = '.job-card-list__title';
  const jobCompanySelector: string = '.job-card-container__company-name';
  const jobCardSelector: string = 'li.card-list__item';
  const jobCarouselCardSelector: string = 'li.artdeco-carousel__item';
  const jobCardTitleSelector: string = '.job-card-square__title';
  const ghostCompanySelector: string = '.ghost-company';

  new MutationObserver((mutationRecords: MutationRecord[]) => {
    setTimeout(() => {
      mutationRecords.forEach(({ addedNodes }: MutationRecord) => {
        addedNodes.forEach(({ nodeType }: Node) => {
          if (nodeType === Node.ELEMENT_NODE) {
            document
              .querySelectorAll(
                `${jobCardSelector}, ${jobCarouselCardSelector}, ${jobTileSelector}`,
              )
              .forEach((job: HTMLElement) => {
                const title: HTMLElement = job.querySelector(
                  `${jobCardTitleSelector}, ${jobTileTitleSelector}`,
                );
                const company: HTMLElement = job.querySelector(
                  `${jobCompanySelector}`,
                );
                const ghostCompany = !!job.querySelector(ghostCompanySelector);
                if (
                  title &&
                  company &&
                  (ghostCompany ||
                    (desiredTitles.length &&
                      !desiredTitlesRegEx.test(title.textContent)) ||
                    (undesiredTitles.length &&
                      undesiredTitlesRegEx.test(title.textContent)) ||
                    (desiredCompanies.length &&
                      !desiredCompaniesRegEx.test(company.textContent)) ||
                    (undesiredCompanies.length &&
                      undesiredCompaniesRegEx.test(company.textContent)))
                ) {
                  if (debugMode) {
                    job.style.border = 'solid red';
                  } else {
                    job.remove();
                  }
                }
              });
          }
        });
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
})();
