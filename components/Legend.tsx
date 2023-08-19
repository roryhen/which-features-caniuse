import { ComponentChildren } from "preact";

function BrowserLi(
  { img, children }: { img: string; children: ComponentChildren },
) {
  return (
    <li class="p-2 pt-3 rounded-2xl bg-gray-100 dark:bg-gray-600 flex flex-col gap-2 text-xs leading-none items-center justify-center">
      <img
        src={img}
        alt={`${children} browser`}
        width="30"
        height="30"
      />
      <span class="flex-grow flex items-center">
        {children}
      </span>
    </li>
  );
}

export default function Legend() {
  return (
    <ul class="text-center grid grid-cols-4 md:grid-cols-7 gap-2 text-gray-100 font-semibold text-gray-800 dark:text-gray-300">
      <BrowserLi img="/chrome_256x256.png">
        Chrome
      </BrowserLi>
      <BrowserLi img="/edge_256x256.png">
        Edge
      </BrowserLi>
      <BrowserLi img="/firefox_256x256.png">
        Firefox
      </BrowserLi>
      <BrowserLi img="/safari_256x256.png">
        Safari
      </BrowserLi>
      <BrowserLi img="/chrome_256x256.png">
        Android Chrome
      </BrowserLi>
      <BrowserLi img="/firefox_256x256.png">
        Android Firefox
      </BrowserLi>
      <BrowserLi img="/safari-ios_256x256.png">
        iOS Safari
      </BrowserLi>
    </ul>
  );
}
