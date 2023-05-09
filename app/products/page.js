import Header from "../components/nav/Header";
import getCurrentUser from "../actions/getCurrentUser";
import NewProduct from "../components/products/NewProduct";

export default async function ProductsPage() {
  const currentUser = await getCurrentUser();
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col">
      <Header label="Products" currentUser={currentUser} />
      <div className="bg-white min-w-screen flex-grow p-4 mt-2 mr-2 mb-2 rounded-lg">
        <NewProduct currentUser={currentUser} />
      </div>
    </div>
  );
}
