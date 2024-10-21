export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {...employeesList,},
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (const key in employeesList) {
        count += 1;
      }
      return count;
    },
  };

  return report;
};
