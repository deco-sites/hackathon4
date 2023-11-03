export interface Props {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}
function SimpleHeader(props: Props) {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-black shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0">
        <a
          href="#"
          class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          {props.title}
        </a>
      </div>
      <div>
        {props.links.map((link: any) => (
          <a
            href={link.url}
            class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default SimpleHeader;
