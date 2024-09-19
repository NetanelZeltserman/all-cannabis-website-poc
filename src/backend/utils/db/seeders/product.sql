INSERT INTO app_product (name, slug, price_start_range, price_end_range, thc_start_range, thc_end_range, cbd_start_range, cbd_end_range, country_id, in_stock, image, created_at, updated_at)
VALUES
    ('סולו 71', 'solo-71', 299, 379, 19.9, 24.2, 0, 4, 11, TRUE, 'https://cdn.jane.co.il/products/37ba124a-9686-44e1-9d28-df1a5d45c7b1.jpg', NOW(), NOW()),
    ('פאט יו', 'fat-u', 265, 319, 19.9, 24.2, 0, 4, 8, TRUE, 'https://cdn.jane.co.il/products/1c8a1889-55e2-4fa1-bfc0-91969e636a1e.jpg', NOW(), NOW()),
    -- same THC and CBD range values
    ('ילואו מארקר', 'yellow-marker', 179, 299, 24.4, 24.4, 0.1, 0.1, 11, TRUE, 'https://cdn.jane.co.il/products/574585b2-4af4-4fda-8ab7-d5b1edf34da1.jpg', NOW(), NOW()),
    ('שאפ-או', 'shap-o', 285, 349, 19.9, 24.2, 0, 4, 8, TRUE, 'https://cdn.jane.co.il/products/e52b37de-01a2-4498-b482-a4b858e45584.jpg', NOW(), NOW()),
    ('לגאטו', 'legato', 219, 307, 19.9, 24.2, 0, 4, 11, TRUE, 'https://cdn.jane.co.il/products/8c121280-0d85-4e00-ad2e-3060b32d9b63.jpg', NOW(), NOW()),
    ('אמ.ספליטר', 'm-splitter', 288, 379, 0, 4, 0, 1, 8, TRUE, 'https://cdn.jane.co.il/products/31239b14-f0fd-4d58-bacd-0e5a0b555506.jpg', NOW(), NOW()),
    ('טנגי קוש', 'tangie-kush', 179, 249, 19.9, 24.2, 0, 4, 8, TRUE, 'https://cdn.jane.co.il/products/ee2a5d23-2de4-4677-b959-708884212ec4.jpg', NOW(), NOW()),
    ('איי. סוש', 'i-sosh', 268, 329, 19.9, 24.2, 0, 4, 11, TRUE, 'https://cdn.jane.co.il/products/afaa9484-7335-42b1-8f05-cf74169422bb.jpg', NOW(), NOW()),
    ('אור', 'or', 119, 265, 19.9, 24.2, 0, 4, 11, TRUE, 'https://cdn.jane.co.il/products/d4d91ea2-5b0b-4869-b8e1-320a293a32d2.jpg', NOW(), NOW()),
    ('אייס גושרס', 'ice-gushers', 90, 149, 19.9, 14.2, 0, 4, 11, TRUE, 'https://cdn.jane.co.il/products/99bf0836-676c-4c67-b415-50a12526f723.jpg', NOW(), NOW());
