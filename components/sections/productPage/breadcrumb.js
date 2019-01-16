import React from "react";
import Link from "next/link";

const Breadcrumb = props => {
  return (
    <div className="mt-2 mb-6">
      <div className="cursor-pointer text-sm font-medium inline-flex">
        <Link href="/">
          <div className="mx-1 cursor-pointer hover:text-red-dark">Home /</div>
        </Link>
        <Link href="/shop">
          <div className="mx-1 cursor-pointer hover:text-red-dark">Shop /</div>
        </Link>
        <Link href="/shop">
          <div
            onClick={() => {
              props.toggleFilter({
                filter: props.shop.activeFilters,
                genetic: props.viewProduct.currentProduct.type,
                multiple: true
              });
              window.scroll(0, 0);
            }}
            className="mx-1 cursor-pointer hover:text-red-dark">
            {props.viewProduct.currentProduct.type} /
          </div>
        </Link>

        <div className="mx-1 cursor-pointer hover:text-red-dark">
          {props.viewProduct.currentProduct.name}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
