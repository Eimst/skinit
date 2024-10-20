using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications;

public class ProductSpecification : BaseSpecification<Product>
{
    public ProductSpecification(ProductSpecParams specParams)
        : base(product =>
            (
                (
                    string.IsNullOrEmpty(specParams.Search)
                    || product.Name.ToLower().Contains(specParams.Search)
                )
                && (specParams.Brands.Count == 0 || specParams.Brands.Contains(product.Brand))
                && (specParams.Types.Count == 0 || specParams.Types.Contains(product.Type))
            )
        )
    {
        ApplyPaging(specParams.PageSize * (specParams.PageIndex - 1), specParams.PageSize);

        switch (specParams.Sort)
        {
            case "priceAsc":
                AddOrderBy(x => x.Price);
                break;
            case "priceDesc":
                AddOrderByDescending(x => x.Price);
                break;
            default:
                AddOrderBy(x => x.Name);
                break;
        }
    }
}
