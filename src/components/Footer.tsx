const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-light-border dark:border-dark-border">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-light-muted dark:text-dark-muted">
        <p>
          © {year} Ashutosh Palhare. All rights reserved.
        </p>
        <p>
          Built with React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  )
}

export default Footer