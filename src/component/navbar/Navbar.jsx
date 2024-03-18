import { CiSearch } from 'react-icons/ci';
const Navbar = () => {
  return (
    <div
      class=" py-4 items-center
    flex flex-col md:flex-row md:justify-between bg-base-100"
    >
      <div>
        <a class="btn btn-ghost text-xl">Recipe Calories</a>
      </div>
      <div>
        <ul className="flex justify-start gap-x-5 p-5">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Recipies </a>
          </li>
          <li>
            <a href="">About </a>
          </li>
          <li>
            <a href="">Search </a>
          </li>
        </ul>
      </div>
      <div class="flex gap-2">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" />
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4  h-4 opacity-70"
            
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>

       
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
