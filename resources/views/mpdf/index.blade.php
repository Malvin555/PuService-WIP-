<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PuService Reports</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.4;
            margin: 20px;
        }
        .header {
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #2563eb; /* Blue-600 */
        }
        .title {
            color: #2563eb; /* Blue-600 */
            margin: 0;
        }
        .subtitle {
            color: #666;
            font-size: 14px;
            margin: 5px 0;
        }
        .report-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            font-size: 13px;
        }
        .report-table th {
            background-color: #2563eb; /* Blue-600 */
            color: white;
            padding: 8px;
            text-align: left;
        }
        .report-table td {
            padding: 6px 8px;
            border-bottom: 1px solid #e5e7eb;
        }
        .report-table tr:nth-child(even) {
            background-color: #f8fafc;
        }
        .no-data {
            text-align: center;
            padding: 20px;
            color: #666;
        }
        .footer {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="title">PuService Reports</h1>
        <div class="subtitle">Generated on: {{ date('Y-m-d H:i') }}</div>
    </div>
    
    @if($reports->isEmpty())
        <p class="no-data">No reports found.</p>
    @else
        <table class="report-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Submitted By</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                @foreach($reports as $report)
                    <tr>
                        <td>{{ $report->id }}</td>
                        <td>{{ $report->title }}</td>
                        <td>{{ $report->category->name }}</td>
                        <td>{{ ucwords(str_replace('_', ' ', $report->status)) }}</td>
                        <td>{{ $report->user->name }}</td>
                        <td>{{ $report->created_at->format('Y-m-d') }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif
    
    <div class="footer">
        PuService - Public Management Reports
    </div>
</body>
</html>