import React, { useState } from "react";

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td width={150}>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({
  products,
  filterText,
  inStockOnly,
}: {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}) {
  const rows: React.JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    if (product.name.toLowerCase().startsWith(filterText.toLowerCase())) {
        if (!inStockOnly) rows.push(<ProductRow product={product} key={product.name} />);
        else if (product.stocked) rows.push(<ProductRow product={product} key={product.name} />);
    }
    lastCategory = product.category;
  });

  return (
    <table width={240}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface StateProps {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: Function;
  onInStockOnlyChange: Function;
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: StateProps) {
  return (
    <form>
      <input
        onChange={(e) => onFilterTextChange(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <label>
        <input
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          type="checkbox"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

interface ProductProps {
  products: Product[];
}

function FilterableProductTable({ products }: ProductProps) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function MyProductTable() {
  return <FilterableProductTable products={PRODUCTS} />;
}
