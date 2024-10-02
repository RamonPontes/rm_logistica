import './style.css'

export default function Home() {
  return (
    <>
      <div className="options">
        <section>
          <p>User options: </p>
          <a href="/user/search">Rastrear encomenda</a>
        </section>
        <section>
          <p>Admin options: </p>
          <a href="">Editar encomenda</a>
        </section>
      </div>
    </>
  );
}