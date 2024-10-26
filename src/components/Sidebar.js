import Link from "./Link";

function Sidebar() {
  const links = [
    { to: "/accordion", label: "Accordion" },
    { to: "/button", label: "Button" },
    { to: "/", label: "Dropdown" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.to}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
