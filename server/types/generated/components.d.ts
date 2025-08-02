import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSaleItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_sale_items';
  info: {
    displayName: 'SaleItem';
    icon: 'stack';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
    sale: Schema.Attribute.Relation<'oneToOne', 'api::sale.sale'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.sale-item': SharedSaleItem;
    }
  }
}
