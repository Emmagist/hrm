  
// Example of a data array that
// you might receive from an API
const data = [
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
  { name: "Anom Meg", role: 'General Manager', type: "Full Time", billable: 'Fixed Pay', status: 'Active'},
]
  
function App() {
  return (
    <div className="all_employee_table">
      <table className="w-full h-full">
        <thead>
            <tr>
            <th>EMPLOYEE NAMES</th>
            <th>ROLE</th>
            <th>TYPE</th>
            <th>BILLABLE</th>
            <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            {data.map((val, key) => {
            return (
                <tr className="h-12" key={key}>
                    <td className="text-xs">{val.name}</td>
                    <td className="text-xs">{val.role}</td>
                    <td className="text-xs">{val.type}</td>
                    <td className="text-xs">{val.billable}</td>
                    <td className="text-xs">{val.status}</td>
                </tr>
            )
            })}    
        </tbody>
      </table>
    </div>
  );
}
  
export default App;