# Blockchain & TXNG

Blockchain là nền tảng kỹ thuật đảm bảo tính bất biến và minh bạch của dữ liệu truy xuất nguồn gốc.

## Tại sao Blockchain cho TXNG?

Vấn đề cốt lõi của TXNG truyền thống là **ai kiểm soát dữ liệu**. Nếu một bên có thể sửa đổi hồ sơ, toàn bộ hệ thống mất ý nghĩa.

Blockchain giải quyết bằng:

| Tính chất | Ý nghĩa với TXNG |
|----------|-----------------|
| **Phi tập trung** | Không ai kiểm soát đơn lẻ toàn bộ dữ liệu |
| **Bất biến** | Một khi ghi vào, không thể sửa hay xóa |
| **Minh bạch** | Mọi thành viên đều có thể xác minh |
| **Không tin tưởng** | Không cần tin bên thứ ba; code xác thực |

## Hyperledger Fabric

TXNG sử dụng **Hyperledger Fabric** — blockchain dành cho doanh nghiệp.

### Tại sao không dùng Ethereum hay Bitcoin?

```
Ethereum/Bitcoin (Public blockchain):
  ✅ Phi tập trung hoàn toàn
  ❌ Mọi người đều thấy dữ liệu nhạy cảm
  ❌ Transaction phí cao
  ❌ Tốc độ chậm (15-30 TPS)

Hyperledger Fabric (Private/Permissioned):
  ✅ Kiểm soát quyền truy cập
  ✅ Dữ liệu nhạy cảm được bảo vệ
  ✅ Không phí transaction
  ✅ Tốc độ cao (1000+ TPS)
  ✅ Tuân thủ quy định doanh nghiệp
```

### Cấu trúc mạng

```
Tổ chức tham gia:
├── Bộ Nông nghiệp (Orderer)
├── HTX Sản xuất (Peer)
├── Công ty Chế biến (Peer)
├── Nhà phân phối (Peer)
└── Siêu thị / Bán lẻ (Peer)
```

## Smart Contract (Chaincode)

```javascript
// txng-chaincode.js — Ví dụ đơn giản
async function recordEvent(ctx, eventData) {
  const event = JSON.parse(eventData);
  
  // Kiểm tra sản phẩm tồn tại
  const product = await ctx.stub.getState(event.productId);
  if (!product) throw new Error('Sản phẩm không tồn tại');
  
  // Tạo composite key
  const key = ctx.stub.createCompositeKey('EVENT', [
    event.productId,
    event.timestamp
  ]);
  
  // Thêm metadata blockchain
  event.txId = ctx.stub.getTxID();
  event.blockTimestamp = ctx.stub.getTxTimestamp();
  event.submitter = ctx.clientIdentity.getID();
  
  // Ghi vào ledger (bất biến)
  await ctx.stub.putState(key, Buffer.from(JSON.stringify(event)));
  
  // Emit event cho listeners
  ctx.stub.setEvent('TXNGEvent', Buffer.from(JSON.stringify(event)));
  
  return event.txId;
}
```

## Chuẩn EPCIS 2.0

TXNG tuân theo chuẩn **GS1 EPCIS 2.0** (Electronic Product Code Information Services):

```json
{
  "@context": "https://ref.gs1.org/standards/epcis/",
  "type": "EPCISDocument",
  "schemaVersion": "2.0",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "eventTime": "2024-01-15T06:00:00Z",
        "action": "OBSERVE",
        "bizStep": "urn:epcglobal:cbv:bizstep:harvesting",
        "disposition": "urn:epcglobal:cbv:disp:in_progress",
        "epcList": ["urn:epc:id:sgtin:8935001.123456.LOT001"],
        "readPoint": {"id": "urn:epc:id:sgln:8935001.0.FARM01"}
      }
    ]
  }
}
```

## Xác minh trên Blockchain

Mọi QR Code đều chứa hash blockchain, cho phép xác minh độc lập:

```bash
# Xác minh một sự kiện TXNG
txng verify --tx 0xabc123def456...

# Kết quả
✅ Transaction hợp lệ
   Block: #4521
   Timestamp: 2024-01-15T10:30:00Z
   Submitter: HTX Mango Hoa Loc
   Data hash: sha256:7d3a8f...
   Unchanged: Yes
```
