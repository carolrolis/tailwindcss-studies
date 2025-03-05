import './App.css'

function App() {
  return (
    <>
      <section className="group font-poppins text-center max-w-2/4 m-auto" id="introduction">
        <h1 className="large-text font-light mt-5">
          Welcome to my studies of <span className="hover-animated md:text-3xl font-black tracking-[2.5px]">TailwindCSS!</span>
        </h1>
        <h2 className="small-text mt-4">
          It's so hard to remember everything about the classes, so I thought about praticing it while I explain it on the same page.
          <br></br>
          So, let's start from the basics: <span className="hover-animated text-center font-medium">text formatting.</span>
        </h2>
      </section>

      <section className="group font-poppins mt-10 max-w-full m-auto" id="topics">
        <div className="max-w-9/10 m-auto mb-10" id="size-topic">
          <div className="flex flex-row items-end gap-2 mb-3" id="size-topic-title">
            <h1 className="large-text font-bold">1. Size</h1>
            <svg className="svg-animated" width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" stroke="#9810fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
          </div>
          <div className="flex flex-row gap-5 md:gap-15 flex-wrap md:flex-nowrap" id="size-topic-content">
            <div id="size-topic-explain">
              <h2 className="small-text mb-2">To change the size of texts in Tailwind, we use the classNames below:</h2>
              <p className="small-text mt-1 font-medium">• text-xs = <span className="font-normal text-sky-700">font-size: 0.75rem (12px)</span></p>
              <p className="small-text mt-1 font-medium">• text-sm = <span className="font-normal text-sky-700">font-size: 0.875rem (14px)</span></p>
              <p className="small-text mt-1 font-medium">• text-base = <span className="font-normal text-sky-700">font-size: 1rem (16px)</span></p>
              <p className="small-text mt-1 font-medium">• text-lg = <span className="font-normal text-sky-700">font-size: 1.125rem (18px)</span></p>
              <p className="small-text mt-1 font-medium">• text-xl = <span className="font-normal text-sky-700">font-size: 1.25rem (20px)</span></p>
              <p className="small-text mt-1 font-medium">• text-2xl = <span className="font-normal text-sky-700">font-size: 1.5rem (24px)</span></p>
              <p className="small-text mt-1 font-medium">• text-3xl = <span className="font-normal text-sky-700">font-size: 1.875rem (30px)</span></p>
              <p className="small-text mt-1 font-medium">• text-[value] = <span className="font-normal text-sky-700">font-size: value</span></p>
            </div>

            <div className="small-text" id="size-topic-example">
              <h2 className="mb-2">Example:</h2>
              <div className="flex flex-row gap-3 items-center" id="size-example-1">
                <code>
                  className="text-sm"
                </code>
                <p className="text-sm text-sky-700 font-medium">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="size-example-2">
                <code>
                  className="text-lg"
                </code>
                <p className="text-lg text-sky-700 font-medium">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="size-example-3">
                <code>
                  className="text-2xl"
                </code>
                <p className="text-2xl text-sky-700 font-medium">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="size-example-4">
                <code>
                  className="text-5xl"
                </code>
                <p className="text-5xl text-sky-700 font-medium">Hi! I'm Carol.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-9/10 m-auto mb-10" id="weight-topic">
          <div className="flex flex-row items-end gap-2 mb-3">
            <h1 className="large-text font-bold">2. Weight</h1>
            <svg className="svg-animated" width="36px" height="36px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.03791 9.98075C0.934777 9.6583 1.11603 9.37719 1.40005 9.24871C1.68408 9.12022 2.09463 9.13412 2.27071 9.45426C2.85393 10.5147 3.64599 10.7282 4.48665 10.7282C5.52721 10.7282 6.29659 10.2615 6.29659 9.45426C6.29659 8.8047 5.9119 8.46416 4.87134 8.14253L4.15872 7.92181C2.64518 7.44883 1.88842 6.69206 1.88842 5.45601C1.88842 3.79743 3.27583 2.6875 5.24342 2.6875C6.91733 2.6875 7.97409 3.33536 8.43833 4.31065C8.57087 4.58909 8.57614 4.91294 8.22794 5.19114C7.87974 5.46934 7.52351 5.34799 7.23327 5.03839C6.47215 4.22653 5.99545 4.04968 5.25604 4.04968C4.1398 4.04968 3.547 4.63618 3.547 5.27943C3.547 5.86592 3.96322 6.23169 4.94702 6.5344L5.67856 6.76143C7.22994 7.23441 7.97409 7.95964 7.97409 9.17047C7.97409 10.7723 6.69389 12.0903 4.46143 12.0903C2.86612 12.0903 1.40005 11.1131 1.03791 9.98075ZM11.8491 8.77985C10.661 8.39543 10.1649 7.86114 10.1649 6.98805C10.1649 5.86736 11.1636 5.04639 12.6128 5.04639C13.8546 5.04639 14.6629 5.63345 14.9778 6.6346C15.0443 6.84599 14.9593 6.98006 14.7475 7.0491C14.5394 7.11697 14.3176 7.09974 14.238 6.89611C13.9356 6.12273 13.352 5.76311 12.5998 5.76311C11.6467 5.76311 11.0135 6.25178 11.0135 6.91638C11.0135 7.45066 11.3464 7.75038 12.2473 8.04358L12.8348 8.23254C14.062 8.62999 14.5516 9.13821 14.5516 10.0178C14.5516 11.1972 13.481 12.0442 11.9927 12.0442C10.6439 12.0442 9.65644 11.2809 9.41979 10.3361C9.36535 10.1188 9.41192 10.0287 9.70039 9.96184C9.98886 9.89499 10.0714 9.89918 10.1715 10.1369C10.4555 10.8114 11.1531 11.3275 12.0318 11.3275C12.9914 11.3275 13.6834 10.7802 13.6834 10.0634C13.6834 9.53567 13.3961 9.28807 12.4366 8.97532L11.8491 8.77985Z" fill="#9810fa"></path> </g>
            </svg>
          </div>

          <div className="flex flex-row gap-5 md:gap-15 flex-wrap md:flex-nowrap" id="weight-topic-content">
            <div id="weight-topic-explain">
              <h2 className="small-text mb-2">To change the weight of texts in Tailwind, we use the classNames below:</h2>
              <p className="small-text mt-1 font-medium">• font-thin = <span className="font-normal text-sky-700">font-weight: 100</span></p>
              <p className="small-text mt-1 font-medium">• font-extralight = <span className="font-normal text-sky-700">font-weight: 200</span></p>
              <p className="small-text mt-1 font-medium">• font-light = <span className="font-normal text-sky-700">font-weight: 300</span></p>
              <p className="small-text mt-1 font-medium">• font-normal = <span className="font-normal text-sky-700">font-weight: 400</span></p>
              <p className="small-text mt-1 font-medium">• font-medium = <span className="font-normal text-sky-700">font-weight: 500</span></p>
              <p className="small-text mt-1 font-medium">• font-semibold = <span className="font-normal text-sky-700">font-weight: 600</span></p>
              <p className="small-text mt-1 font-medium">• font-bold = <span className="font-normal text-sky-700">font-weight: 700</span></p>
              <p className="small-text mt-1 font-medium">• font-extrabold = <span className="font-normal text-sky-700">font-weight: 800</span></p>
              <p className="small-text mt-1 font-medium">• font-black = <span className="font-normal text-sky-700">font-weight: 900</span></p>
              <p className="small-text mt-1 font-medium">• font-[value] = <span className="font-normal text-sky-700">font-weight: value</span></p>
            </div>

            <div className="small-text" id="size-topic-example">
              <h2 className="mb-2">Example:</h2>
              <div className="flex flex-row gap-3 items-center" id="weight-example-1">
                <code>
                  className="font-extralight"
                </code>
                <p className="text-sm text-sky-700 font-extralight">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="weight-example-2">
                <code>
                  className="font-light"
                </code>
                <p className="text-sm text-sky-700 font-light">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="weight-example-3">
                <code>
                  className="font-normal"
                </code>
                <p className="text-sm text-sky-700 font-normal">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="weight-example-4">
                <code>
                  className="font-bold"
                </code>
                <p className="text-sm text-sky-700 font-bold">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="weight-example-5">
                <code>
                  className="font-semibold"
                </code>
                <p className="text-sm text-sky-700 font-semibold">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="weight-example-6">
                <code>
                  className="font-black"
                </code>
                <p className="text-sm text-sky-700 font-black">Hi! I'm Carol.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-9/10 m-auto mb-10" id="family-topic">
          <div className="flex flex-row items-end gap-2 mb-3">
            <h1 className="large-text font-bold">3. Family</h1>
            <svg className="svg-animated" width="36px" height="36px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.5 4.5C2.5 3.09886 3.59886 2 5 2H12.499C12.7752 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H8.69244L8.40509 3.85458C8.18869 4.49752 7.89401 5.37197 7.58091 6.29794C7.50259 6.52956 7.42308 6.76453 7.34332 7H8.5C8.77614 7 9 7.22386 9 7.5C9 7.77614 8.77614 8 8.5 8H7.00407C6.56724 9.28543 6.16435 10.4613 5.95799 11.0386C5.63627 11.9386 5.20712 12.4857 4.66741 12.7778C4.16335 13.0507 3.64154 13.0503 3.28378 13.05L3.25 13.05C2.94624 13.05 2.7 12.8037 2.7 12.5C2.7 12.1962 2.94624 11.95 3.25 11.95C3.64182 11.95 3.9035 11.9405 4.14374 11.8105C4.36443 11.691 4.65532 11.4148 4.92217 10.6683C5.10695 10.1514 5.45375 9.14134 5.8422 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H6.18187C6.30127 6.64785 6.42132 6.29323 6.53887 5.94559C6.85175 5.02025 7.14627 4.14631 7.36256 3.50368L7.53192 3H5C4.15114 3 3.5 3.65114 3.5 4.5C3.5 4.77614 3.27614 5 3 5C2.72386 5 2.5 4.77614 2.5 4.5Z" fill="#9810fa"></path> </g>
            </svg>
          </div>

          <div className="flex flex-row gap-5 md:gap-15 flex-wrap md:flex-nowrap" id="family-topic-content">
            <div id="family-topic-explain">
              <h2 className="small-text mb-2">To change the font-family, we use the classNames below:</h2>
              <p className="small-text mt-1 font-medium">• font-sans = <span className="font-normal text-sky-700">font-family: var(--font-sans)</span></p>
              <p className="small-text mt-1 font-medium">• font-serif = <span className="font-normal text-sky-700">font-family: var(--font-serif);</span></p>
              <p className="small-text mt-1 font-medium">• font-mono = <span className="font-normal text-sky-700">font-family: var(--font-mono);</span></p>
              <p className="small-text mt-1 font-medium">• font-poppins(imported from Google Fonts) = <span className="font-normal text-sky-700">--font-poppins: "Poppins"</span></p>
            </div>

            <div className="small-text" id="size-topic-example">
              <h2 className="mb-2">Example:</h2>
              <div className="flex flex-row gap-3 items-center" id="family-example-0">
                <code>
                  &gt; in <span className="text-sky-700">index.css</span>:
                  <br>
                  </br>
                  <span className="text-pink-600">@import url('link');</span>
                  <br></br>
                  <span className="text-pink-600">@theme</span> &#123;
                  <br></br>
                  --font-custom: "Poppins", sans-serif;
                  <br></br>
                  &#125;
                </code>
              </div>
              <div className="flex flex-row gap-3 items-center" id="family-example-1">
                <code>
                  className="font-sans"
                </code>
                <p className="text-sm text-sky-700 font-sans">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="family-example-2">
                <code>
                  className="font-serif"
                </code>
                <p className="text-sm text-sky-700 font-serif">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="family-example-3">
                <code>
                  className="font-mono"
                </code>
                <p className="text-sm text-sky-700 font-mono">Hi! I'm Carol.</p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="family-example-4">
                <code>
                  className="font-custom"
                </code>
                <p className="text-sm text-sky-700 font-poppins">Hi! I'm Carol.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-9/10 m-auto mb-10" id="align-topic">
          <div className="flex flex-row items-end gap-2 mb-3">
            <h1 className="large-text font-bold">4. Align</h1>
            <svg className="svg-animated" width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9810fa">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H16M3 14H21M3 18H16M3 6H21" stroke="#9810fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>
          </div>

          <div className="flex flex-row gap-5 md:gap-15 flex-wrap md:flex-nowrap" id="align-topic-content">
            <div id="align-topic-explain">
              <h2 className="small-text mb-2">To change the text-align, we use the classNames below:</h2>
              <p className="small-text mt-1 font-medium">• text-left = <span className="font-normal text-sky-700">text-align: left</span></p>
              <p className="small-text mt-1 font-medium">• text-center = <span className="font-normal text-sky-700">text-align: center;</span></p>
              <p className="small-text mt-1 font-medium">• text-right = <span className="font-normal text-sky-700">text-align: right;</span></p>
              <p className="small-text mt-1 font-medium">• text-justify = <span className="font-normal text-sky-700">text-align: justify;</span></p>
            </div>

            <div className="small-text" id="size-topic-example">
              <h2 className="mb-2">Example:</h2>
              <div className="flex flex-row gap-3 items-center" id="align-example-1">
                <code>
                  className="text-left"
                </code>
                <p className="max-w-2/6 text-xs text-sky-700 text-left border-l-1 border-purple-600 pl-1">
                  Hi! I'm Carol. I love listening to ambient music whenever I'm programming.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="align-example-2">
                <code>
                  className="text-center"
                </code>
                <p className="max-w-2/6 text-xs text-sky-700 text-center border-l-1 border-r-1 border-purple-600">
                  Hi! I'm Carol. I love listening to ambient music whenever I'm programming.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="align-example-3">
                <code>
                  className="text-right"
                </code>
                <p className="max-w-2/6 text-xs text-sky-700 text-right border-r-1 border-purple-600 pr-1">
                  Hi! I'm Carol. I love listening to ambient music whenever I'm programming.
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center" id="align-example-4">
                <code>
                  className="text-justify"
                </code>
                <p className="max-w-2/6 text-xs text-sky-700 text-justify border-l-1 border-r-1 border-purple-600 pl-1 pr-1">
                  Hi! I'm Carol. I love listening to ambient music whenever I'm programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default App