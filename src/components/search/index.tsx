import * as React from 'react'
import Header from './header';
import Body from './body';
import Footer from './footer';
const Search = () => {
  return (
    <section className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <Body />
      <Footer />
    </section>
  )
}

export default Search