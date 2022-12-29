import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Link href='/about'>About Page</Link><br/>
            <Link href='/category/products'>Products</Link><br/>
        </div>
    )
}

export default Index