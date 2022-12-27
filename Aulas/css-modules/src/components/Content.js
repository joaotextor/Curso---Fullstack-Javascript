import style from './Content.module.css'

export default function Content() {
    return (
        <div class={style.content}>
            <h2>Título</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa nulla, commodo nec efficitur hendrerit, vestibulum nec lorem. Nam in mollis diam, sed blandit velit. Nullam ultrices gravida purus, vel venenatis libero fermentum nec. Nulla cursus, dui non sodales vulputate, diam tortor accumsan velit, eget mollis dolor nibh quis nulla. Vestibulum venenatis ornare nisi, eget pulvinar velit consequat ut. In sagittis augue et lacus vestibulum, sit amet congue odio pretium. Nam quis lacinia nisl, eget maximus enim. Integer non dui placerat, eleifend massa ac, sodales nibh. Nunc eu purus et nisi ultricies molestie. Nunc pellentesque pretium eleifend. Donec convallis ullamcorper lacus.
            </p>
            <button class={style.btn}>Outro Botão Teste</button>
        </div>
    )
}