const Navbar = () => {
  return (
    <div
      class=" py-4 items-center
    flex justify-between bg-base-100"
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
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
        </div>
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