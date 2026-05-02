import { defineConfig } from 'vitepress'

// Plugin bỏ qua lỗi ảnh/media không tồn tại khi build
// Hữu ích khi đang soạn tài liệu và ảnh chưa được upload
const ignoreMissingAssets = {
  name: 'ignore-missing-assets',
  resolveId(id) {
    // Bỏ qua tất cả asset không phải JS/CSS — kể cả ảnh, media, font, file Office...
    if (/\.(png|jpe?g|gif|svg|webp|ico|bmp|tiff?|emf|wmf|pdf|doc[x]?|xls[x]?|ppt[x]?|mp4|mp3|wav|ogg|woff2?|ttf|eot)(\?.*)?$/.test(id)) {
      return '\0virtual:missing-asset'
    }
  },
  load(id) {
    if (id === '\0virtual:missing-asset') {
      return 'export default ""'
    }
  }
}

export default defineConfig({
  // Metadata
  title: 'TXNG - Truy Xuất Nguồn Gốc',
  description: 'Hệ thống tài liệu toàn diện về Truy xuất nguồn gốc hàng hóa, sản phẩm và chuỗi cung ứng.',
  lang: 'vi-VN',

  // Head tags
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TXNG - Truy Xuất Nguồn Gốc' }],
    ['meta', { property: 'og:description', content: 'Hệ thống tài liệu toàn diện về Truy xuất nguồn gốc' }],
  ],

  // Clean URLs
  cleanUrls: true,

  // Bỏ qua dead links khi build — hữu ích khi đang soạn tài liệu dần dần
  // Xem: https://vitepress.dev/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: true,

  // Vite config: bỏ qua ảnh/media không tồn tại khi build
  vite: {
    plugins: [ignoreMissingAssets]
  },

  // Theme config
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'TXNG Docs',

    // Navigation bar
    nav: [

      {
        text: '📖 Giới thiệu',
        items: [
          { text: 'TXNG là gì?', link: '/gioi-thieu/txng-la-gi' },
          { text: 'Tại sao cần TXNG?', link: '/gioi-thieu/tai-sao-can-txng' },
          { text: 'Kiến trúc hệ thống', link: '/gioi-thieu/kien-truc' },
        ]
      },
      {
        text: '🚀 Hướng dẫn',
        items: [
          { text: 'Bắt đầu nhanh', link: '/huong-dan/bat-dau-nhanh' },
          { text: 'Cài đặt & Cấu hình', link: '/huong-dan/cai-dat' },
          { text: 'Đăng ký sản phẩm', link: '/huong-dan/dang-ky-san-pham' },
          { text: 'Tra cứu nguồn gốc', link: '/huong-dan/tra-cuu' },
        ]
      },
      {
        text: '📋 Chuẩn mực',
        items: [
          { text: 'Tiêu chuẩn quốc tế', link: '/chuan-muc/tieu-chuan-quoc-te' },
          { text: 'Quy định pháp luật VN', link: '/chuan-muc/quy-dinh-phap-luat' },
          { text: 'GS1 & Mã vạch', link: '/chuan-muc/gs1-ma-vach' },
        ]
      },
      {
        text: '💻 Công nghệ',
        items: [
          { text: 'Blockchain & TXNG', link: '/cong-nghe/blockchain' },
          { text: 'QR Code & RFID', link: '/cong-nghe/qr-rfid' },
          { text: 'API Reference', link: '/cong-nghe/api-reference' },
        ]
      },
      { text: '📚 Từ viết tắt', link: '/tu-viet-tat' },
      {
        text: '📁 Dự án',
        items: [
          { text: 'Tổng quan dự án', link: '/du-an/' },
          { text: 'Khái niệm định danh & Truy xuất', link: '/du-an/khai-niem-dinh-danh-truy-xuat' },
          { text: 'UID/DID TXNG', link: '/du-an/UIDDID-TXNG-noi-dung' },
          { text: 'Phân tích đề xuất kỹ thuật', link: '/du-an/phan-tich-de-xuat-ky-thuat' },
          { text: '📄 Đề xuất kỹ thuật HT-TXNG', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h' },
        ]
      },
    ],

    // Sidebar
    sidebar: {
      '/gioi-thieu/': [
        {
          text: '📖 Giới thiệu',
          items: [
            { text: 'TXNG là gì?', link: '/gioi-thieu/txng-la-gi' },
            { text: 'Tại sao cần TXNG?', link: '/gioi-thieu/tai-sao-can-txng' },
            { text: 'Kiến trúc hệ thống', link: '/gioi-thieu/kien-truc' },
            { text: 'Các bên liên quan', link: '/gioi-thieu/cac-ben-lien-quan' },
          ]
        }
      ],
      '/huong-dan/': [
        {
          text: '🚀 Hướng dẫn sử dụng',
          items: [
            { text: 'Bắt đầu nhanh', link: '/huong-dan/bat-dau-nhanh' },
            { text: 'Cài đặt & Cấu hình', link: '/huong-dan/cai-dat' },
            { text: 'Đăng ký sản phẩm', link: '/huong-dan/dang-ky-san-pham' },
            { text: 'Tra cứu nguồn gốc', link: '/huong-dan/tra-cuu' },
            { text: 'Quản lý chuỗi cung ứng', link: '/huong-dan/chuoi-cung-ung' },
          ]
        }
      ],
      '/chuan-muc/': [
        {
          text: '📋 Chuẩn mực & Quy định',
          items: [
            { text: 'Tiêu chuẩn quốc tế', link: '/chuan-muc/tieu-chuan-quoc-te' },
            { text: 'Quy định pháp luật VN', link: '/chuan-muc/quy-dinh-phap-luat' },
            { text: 'GS1 & Mã vạch', link: '/chuan-muc/gs1-ma-vach' },
          ]
        }
      ],
      '/cong-nghe/': [
        {
          text: '💻 Công nghệ',
          items: [
            { text: 'Blockchain & TXNG', link: '/cong-nghe/blockchain' },
            { text: 'QR Code & RFID', link: '/cong-nghe/qr-rfid' },
            { text: 'API Reference', link: '/cong-nghe/api-reference' },
          ]
        }
      ],
      '/tu-viet-tat': [
        {
          text: '📚 Từ viết tắt & Thuật ngữ',
          items: [
            { text: 'A – C', link: '/tu-viet-tat#a' },
            { text: 'D – G', link: '/tu-viet-tat#d' },
            { text: 'H – M', link: '/tu-viet-tat#h' },
            { text: 'N – R', link: '/tu-viet-tat#n' },
            { text: 'S – X', link: '/tu-viet-tat#s' },
          ]
        }
      ],
      '/du-an/': [
        {
          text: '📁 Dự án TXNG',
          items: [
            { text: 'Tổng quan dự án', link: '/du-an/' },
            { text: 'Khái niệm định danh & Truy xuất', link: '/du-an/khai-niem-dinh-danh-truy-xuat' },
            { text: 'UID/DID TXNG', link: '/du-an/UIDDID-TXNG-noi-dung' },
            { text: 'Phân tích đề xuất kỹ thuật', link: '/du-an/phan-tich-de-xuat-ky-thuat' },
          ]
        },
        {
          text: '📄 Đề xuất kỹ thuật HT-TXNG',
          collapsed: false,
          items: [
            {
              text: 'I. Thông tin chung về dự án',
              link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#i-thông-tin-chung-về-dự-án'
            },
            {
              text: 'II. Căn cứ pháp lý',
              link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#ii-các-căn-cứ-pháp-lý',
              collapsed: true,
              items: [
                { text: 'II.1. Căn cứ pháp lý chung', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#ii1-căn-cứ-pháp-lý-chung' },
                { text: 'II.2. Chỉ đạo, định hướng', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#ii2-các-chỉ-đạo-định-hướng-của-các-cấp-có-liên-quan' },
                { text: 'II.3. Căn cứ đơn vị sử dụng vốn', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#ii3-căn-cứ-pháp-lý-của-đơn-vị-sử-dụng-vốn' },
              ]
            },
            {
              text: 'III. Sự cần thiết đầu tư',
              link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#iii-sự-cần-thiết-đầu-tư',
              collapsed: true,
              items: [
                { text: 'III.1. Hiện trạng ứng dụng CNTT', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#iii1-hiện-trạng-ứng-dụng-công-nghệ-thông-tin' },
                { text: 'III.2. Sự cần thiết đầu tư', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#iii2-sự-cần-thiết-đầu-tư' },
              ]
            },
            {
              text: 'IV. Mục tiêu & Quy mô đầu tư',
              link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#iv-mục-tiêu-và-quy-mô-đầu-tư-của-dự-án',
              collapsed: true,
              items: [
                { text: 'IV.1. Mục tiêu tổng quát', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#iv1-mục-tiêu-tổng-quát' },
                { text: 'IV.2. Mục tiêu cụ thể', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#iv2-mục-tiêu-cụ-thể' },
                { text: 'IV.3. Phạm vi, quy mô, đối tượng', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#iv3-phạm-vi-quy-mô-đối-tượng-đầu-tư' },
              ]
            },
            {
              text: 'V. Thuyết minh kỹ thuật',
              link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v-thuyết-minh-kỹ-thuật-các-hạng-mục',
              collapsed: true,
              items: [
                {
                  text: 'V.1. Phương án kỹ thuật, công nghệ',
                  link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v1-phương-án-kỹ-thuật-công-nghệ',
                  collapsed: true,
                  items: [
                    { text: 'V.1.1. Khái niệm & Vận hành', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v11-khái-niệm-cách-thức-vận-hành-và-cách-thức-đảm-bảo-minh-bạch-chính-xác-của-hệ-thống-truy-xuất-nguồn-gốc' },
                    { text: 'V.1.2. Kiến trúc tổng thể hệ thống', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v12-mô-hình-kiến-trúc-tổng-thể-hệ-thống' },
                    { text: 'V.1.3. Công nghệ, kỹ thuật áp dụng', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v13-các-công-nghệ-kỹ-thuật-áp-dụng' },
                    { text: 'V.1.4. Công nghệ xây dựng phần mềm', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v14-công-nghệ-xây-dựng-phần-mềm' },
                  ]
                },
                {
                  text: 'V.2. Hạng mục thuê hạ tầng kỹ thuật',
                  link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v2-hạng-mục-thuê-hạ-tầng-kỹ-thuật-vận-hành-hệ-thống',
                  collapsed: true,
                  items: [
                    { text: 'V.2.1. Danh mục thiết bị', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v21-danh-mục-thiết-bị-phần-cứng-phần-mềm-thương-mại-và-các-yêu-cầu-về-kỹ-thuật-của-thiết-bị' },
                    { text: 'V.2.2. Lắp đặt, cài đặt', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v22-khối-lượng-công-việc-lắp-đặt-cài-đặt' },
                  ]
                },
                {
                  text: 'V.3. Hạng mục phần mềm nội bộ',
                  link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v3-hạng-mục-xây-dựng-phần-mềm-nội-bộ',
                  collapsed: true,
                  items: [
                    { text: 'V.3.1. Tên phần mềm', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v31-tên-phần-mềm' },
                    { text: 'V.3.2. Quy trình nghiệp vụ', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v32-các-quy-trình-nghiệp-vụ-cần-được-tin-học-hóa' },
                    { text: 'V.3.3. Đối tượng tham gia', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v33-các-đối-tượng-tham-gia-vào-quy-trình-nghiệp-vụ' },
                    { text: 'V.3.4. Mô tả chức năng phần mềm', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v34-mô-tả-chức-năng-của-phần-mềm' },
                    { text: 'V.3.5. Yêu cầu phi chức năng', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v35-các-yêu-cầu-phi-chức-năng-của-phần-mềm' },
                  ]
                },
                { text: 'V.4. Đào tạo chuyển giao công nghệ', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v4-đào-tạo-chuyển-giao-công-nghệ' },
                {
                  text: 'V.5. Hỗ trợ sử dụng & Vận hành',
                  link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v5-hỗ-trợ-sử-dụng-hỗ-trợ-quản-trị-vận-hành-ứng-dụng',
                  collapsed: true,
                  items: [
                    { text: 'V.5.1. Hỗ trợ sử dụng phần mềm', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v51-hỗ-trợ-sử-dụng-phần-mềm' },
                    { text: 'V.5.2. Hỗ trợ quản trị vận hành', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#v52-hỗ-trợ-quản-trị-vận-hành-ứng-dụng' },
                  ]
                },
              ]
            },
            { text: 'VI. Bảo hành, bảo trì', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#vi-bảo-hành-bảo-trì' },
            { text: 'VII. Kế hoạch & Tiến độ', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#vii-kế-hoạch-và-tiến-độ-thực-hiện' },
            {
              text: 'VIII. Tổng mức đầu tư sơ bộ',
              link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#viii-tổng-mức-đầu-tư-sơ-bộ',
              collapsed: true,
              items: [
                { text: 'VIII.1. Căn cứ lập dự toán', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#viii1-căn-cứ-lập-dự-toán-tổng-mức-đầu-tư' },
                { text: 'VIII.2. Dự kiến tổng mức đầu tư', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#viii2-dự-kiến-tổng-mức-đầu-tư' },
              ]
            },
            { text: 'IX. Đề xuất, kiến nghị', link: '/du-an/1._De_xuat_ky_thuat_HT-TXNG_20250707_23h#ix-đề-xuất-kiến-nghị' },
          ]
        }
      ],
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huamanhtuyen/txng-docs' },
    ],

    // Footer
    footer: {
      message: 'Tài liệu được phát hành theo giấy phép MIT.',
      copyright: `Copyright © ${new Date().getFullYear()} TXNG - Hệ thống Truy xuất nguồn gốc`
    },

    // Search
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm tài liệu'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả cho',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để điều hướng',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    },

    // Edit link
    editLink: {
      pattern: 'https://github.com/huamanhtuyen/txng-docs/edit/main/docs/:path',
      text: 'Chỉnh sửa trang này'
    },

    // Last updated
    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // Document footer
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp theo'
    },

    // Outline
    outline: {
      label: 'Mục lục trang',
      level: [2, 4]
    },

    // Return to top
    returnToTopLabel: 'Về đầu trang',

    // Sidebar menu label
    sidebarMenuLabel: 'Menu',

    // Dark mode toggle label
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang sáng',
    darkModeSwitchTitle: 'Chuyển sang tối',
  }
})
