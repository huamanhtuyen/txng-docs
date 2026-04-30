import { defineConfig } from 'vitepress'

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

  // Theme config
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'TXNG Docs',

    // Navigation bar
    nav: [
      { text: '🏠 Trang chủ', link: '/' },
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
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
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
      pattern: 'https://github.com/your-org/txng-docs/edit/main/docs/:path',
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
      level: [2, 3]
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
