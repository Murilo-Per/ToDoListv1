import logoTodo from '../assets/Logo.svg'; 

export function Header () {
  return (
    <header className="w-full h-52 bg-gray-700 flex justify-center items-center">
      <img className="w-32 h-12" src={logoTodo} alt="Logotipo do projeto todo" />
    </header>
  );
}