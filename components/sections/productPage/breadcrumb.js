import React from "react";
import Link from "next/link";

const Breadcrumb = props => {
  return (
    <div className="mt-2 mb-6">
      <div className="text-sm font-medium inline-flex sm:text-xs">
        <Link prefetch href="/">
          <div className="mx-1 sm:mx-0 cursor-pointer hover:text-red-dark">
            Home /
          </div>
        </Link>
        <Link prefetch href="/shop">
          <div className="mx-1 sm:mx-0 cursor-pointer hover:text-red-dark">
            Shop /
          </div>
        </Link>
        <Link prefetch href="/shop">
          <div
            onClick={() => {
              props.toggleFilter({
                filter: props.shop.activeFilters,
                type: props.viewProduct.currentProduct.type.toLowerCase()
              });
              window.scroll(0, 0);
            }}
            className="mx-1 sm:mx-0 cursor-pointer hover:text-red-dark"
          >
            {props.viewProduct.currentProduct.type} /
          </div>
        </Link>

        <div className="mx-1 sm:mx-0">
          {props.viewProduct.currentProduct.name}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
