

function ShoppingLayout() {
    return (
        <div className="flex flex-col bg-white overflow-hidden">ShoppingLayout
        {/* common header */}

        <main className="flex flex-col w-full">
            <Outlet />
        </main>
        
        
        </div>
    );
}

export default ShoppingLayout