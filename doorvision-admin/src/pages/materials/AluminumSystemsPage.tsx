const aluminumSystems = [
  {
    id: 1,
    name: 'Xingfa hệ 55',
    brand: 'Xingfa',
    code: 'XINGFA_55',
  },
  {
    id: 2,
    name: 'Xingfa hệ 93',
    brand: 'Xingfa',
    code: 'XINGFA_93',
  },
];

function AluminumSystemsPage() {
  return (
    <div>
      <h2>Quản lý hệ nhôm</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên hệ nhôm</th>
            <th>Thương hiệu</th>
            <th>Mã</th>
          </tr>
        </thead>
        <tbody>
          {aluminumSystems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AluminumSystemsPage;
