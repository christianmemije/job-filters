// ==UserScript==
// @name         Who is Hiring? jobs filter
// @description  Filter jobs based on title and location
// @namespace    https://greasyfork.org/en/users/673321-christianmemije
// @version      0.1.0
// @license      MIT
// @author       christianmemije
// @match        *://whoishiring.io/*
// @grant        none
// ==/UserScript==
(() => {
  // Configuration starts
  const desiredTitles = []; // e.g. ['front end', 'ui engineer']
  const undesiredTitles: string[] = []; // e.g. ['full stack', 'manager']
  const desiredLocations = []; // e.g. ['San Francisco', 'remote']
  const undesiredLocations = []; // e.g. ['Canada', 'remote']
  // Configuration ends

  const debugMode: boolean = false;

  const desiredTitlesRegEx: RegExp = new RegExp(desiredTitles.join('|'), 'i');
  const undesiredTitlesRegEx: RegExp = new RegExp(
    undesiredTitles.join('|'),
    'i',
  );
  const desiredLocationsRegEx: RegExp = new RegExp(
    desiredLocations.join('|'),
    'i',
  );
  const undesiredLocationsRegEx: RegExp = new RegExp(
    undesiredLocations.join('|'),
    'i',
  );

  const jobSelector: string = '.ItemHeader';
  const jobTitleSelector: string = 'h1';
  const jobLocationSelector: string = '.address';
  const scrollWindowSelector: string = '.ItemsList';

  const checkbox: HTMLInputElement = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = true;
  const checkboxId: string = 'whoIsHiringJobsFilterToggle';
  checkbox.id = checkboxId;
  const label: HTMLLabelElement = document.createElement('label');
  label.htmlFor = checkboxId;
  label.appendChild(document.createTextNode('Who is Hiring? jobs filter'));
  const wrapper: HTMLDivElement = document.createElement('div');
  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);
  wrapper.style.position = 'fixed';
  wrapper.style.bottom = '8px';
  wrapper.style.left = '8px';
  wrapper.style.background = 'white';
  document.body.appendChild(wrapper);

  new MutationObserver((mutationRecords: MutationRecord[]) => {
    setTimeout(() => {
      mutationRecords.forEach(({ addedNodes }: MutationRecord) => {
        addedNodes.forEach(({ nodeType }: Node) => {
          if (nodeType === Node.ELEMENT_NODE) {
            document
              .querySelectorAll(jobSelector)
              .forEach((job: HTMLElement) => {
                const title: HTMLElement = job.querySelector(jobTitleSelector);
                const location: HTMLElement = job.querySelector(
                  jobLocationSelector,
                );
                if (
                  title &&
                  location &&
                  ((desiredTitles.length &&
                    !desiredTitlesRegEx.test(title.textContent)) ||
                    (undesiredTitles.length &&
                      undesiredTitlesRegEx.test(title.textContent)) ||
                    (desiredLocations.length &&
                      !desiredLocationsRegEx.test(location.textContent)) ||
                    (undesiredLocations.length &&
                      undesiredLocationsRegEx.test(location.textContent)))
                ) {
                  if (debugMode) {
                    job.style.border = 'solid red';
                    job.style.overflow = 'hidden';
                    job.style.height = '1em';
                  } else {
                    job.remove();
                  }
                }

                const enabled: boolean = checkbox.checked;
                if (enabled) {
                  const scrollWindow: HTMLElement = document.querySelector(
                    scrollWindowSelector,
                  );
                  scrollWindow.scrollTop = scrollWindow.scrollHeight;
                }
              });
          }
        });
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
})();
