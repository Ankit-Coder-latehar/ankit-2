import React from 'react';

const InvoiceTable = () => {
  
    const invoices = [
        { id: 1, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
     
        { id: 2, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 3, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 4, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 5, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 6, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 7, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 8, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 9, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 10, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 11, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 12, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 13, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
        { id: 14, invoiceId: 'INV/24-25/02020', month: 'July', dueDate: '05-05-2023', status: 'Paid', amount: 'Rs 3400' },
    ];

    return (
        <div className="p-8">
            <div className="text-lg mb-4">
                Per Student Charge= <span className="font-bold text-blue-600">100Rs/month</span>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-blue-700 text-white">
                            <th className="px-4 py-2 border border-gray-300">SNo.</th>
                            <th className="px-4 py-2 border border-gray-300">Invoice ID</th>
                            <th className="px-4 py-2 border border-gray-300">Month</th>
                            <th className="px-4 py-2 border border-gray-300">Due Date</th>
                            <th className="px-4 py-2 border border-gray-300">Status</th>
                            <th className="px-4 py-2 border border-gray-300">Amount</th>
                            <th className="px-4 py-2 border border-gray-300">Bill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice, index) => (
                            <tr key={invoice.id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{index + 1}.</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.invoiceId}</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.month}</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.dueDate}</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.status}</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.amount}</td>
                                <td className="border border-gray-300 px-4 py-2 text-blue-600 underline">
                                    <a href="#">View Bill</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceTable;
