import style from './Header.module.css'

export default function Header() {
    return (
        <header class={style.header}>
            <h1>Bem-vindo!</h1>
            <button class={style.btn}>Botão Teste</button>
        </header>
    )
}