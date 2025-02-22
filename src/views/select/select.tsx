import { Typography } from "@mui/material";
import React from "react";
import AppTheme from "../../theme/app-theme.tsx";

const Select: React.FC = () => (
    <div className="d-flex w-100 flex-column">
        <Typography className="content--title mb-4" variant="h4" sx={{ fontWeight: 500 }}>
            Select
        </Typography>

        <Typography variant="body1" className="mb-3" sx={AppTheme.typography.desktop02}>
            <strong>Purpose:</strong> The Select module enables powerful and flexible querying of your data, allowing you to retrieve specific records based on defined criteria.
            <br /><strong>Why It's Important:</strong> In real-world applications, you rarely need to retrieve all data at once. The Select module empowers you to isolate specific records that match your search criteria.
        </Typography>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Key Components
        </Typography>

        <ul className="list-unstyled mb-3">
            <li><strong>Schema:</strong> The top-level object specifying the data model (schema) you want to query.</li>
            <li><strong>Model Names (e.g., "name"):</strong> Properties within the schema object correspond to the names of your data models.</li>
            <li><strong>Filter Criteria:</strong> Within each model's object, you specify the filter criteria for that model using attribute-value pairs (e.g., "name": ""). You can use various operators for filtering (like equals, greater than, less than, contains, etc.).</li>
        </ul>

        <Typography className="content--title mb-3 mt-4" variant="h5" sx={{ fontWeight: 500 }}>
            Filter Operators
        </Typography>

        <table className="w-100 mb-4">
            <thead>
                <tr>
                    <th>Operator</th>
                    <th>Description</th>
                    <th style={{ minWidth: "100px" }}>Data Types</th>
                    <th>Example</th>
                    <th>Resulting Filter</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-2"><code>lwt</code></td>
                    <td className="p-2">Less Than</td>
                    <td className="p-2">float, int, date</td>
                    <td className="p-2">{'{ "op": "lwt", "val": 5 }'}</td>
                    <td className="p-2">&lt; 5 or &lt; '2024-07-22'</td>
                </tr>
                <tr>
                    <td className="p-2"><code>lgt</code></td>
                    <td className="p-2">Greater Than</td>
                    <td className="p-2">float, int, date</td>
                    <td className="p-2">{'{ "op": "lgt", "val": "2024-07-20" }'}</td>
                    <td className="p-2">&gt; '2024-07-20'</td>
                </tr>
                <tr>
                    <td className="p-2"><code>lwt_equals</code></td>
                    <td className="p-2">Less Than or Equal To</td>
                    <td className="p-2">float, int, date</td>
                    <td className="p-2">{'{ "op": "lwt_equals", "val": 10 }'}</td>
                    <td className="p-2">&lt;= 10</td>
                </tr>
                <tr>
                    <td className="p-2"><code>lgt_equals</code></td>
                    <td className="p-2">Greater Than or Equal To</td>
                    <td className="p-2">float, int, date</td>
                    <td className="p-2">{'{ "op": "lgt_equals", "val": "2024-07-22T15:30:00" }'}</td>
                    <td className="p-2">&gt;= '2024-07-22T15:30:00'</td>
                </tr>
                <tr>
                    <td className="p-2"><code>equals</code></td>
                    <td className="p-2">Equal To</td>
                    <td className="p-2">*</td>
                    <td className="p-2">{'{ "op": "equals", "val": null }'}</td>
                    <td className="p-2">IS NULL</td>
                </tr>
                <tr>
                    <td className="p-2"><code>between</code></td>
                    <td className="p-2">Between</td>
                    <td className="p-2">float, int, date</td>
                    <td className="p-2">{'{ "op": "between", "val": [10, 20] }'}</td>
                    <td className="p-2">BETWEEN 10 AND 20</td>
                </tr>
                <tr>
                    <td className="p-2"><code>diff</code></td>
                    <td className="p-2">Not Equal To</td>
                    <td className="p-2">*</td>
                    <td className="p-2">{'{ "op": "diff", "val": "active" }'}</td>
                    <td className="p-2">!= 'active'</td>
                </tr>
                <tr>
                    <td className="p-2"><code>starts_with</code></td>
                    <td className="p-2">Starts With</td>
                    <td className="p-2">string</td>
                    <td className="p-2">{'{ "op": "starts_with", "val": "Apple" }'}</td>
                    <td className="p-2">LIKE '%Apple'</td>
                </tr>
                <tr>
                    <td className="p-2"><code>ends_with</code></td>
                    <td className="p-2">Ends With</td>
                    <td className="p-2">string</td>
                    <td className="p-2">{'{ "op": "ends_with", "val": ".com" }'}</td>
                    <td className="p-2">LIKE '.com%'</td>
                </tr>
                <tr>
                    <td className="p-2"><code>like</code></td>
                    <td className="p-2">Contains</td>
                    <td className="p-2">string</td>
                    <td className="p-2">{'{ "op": "like", "val": "pro" }'}</td>
                    <td className="p-2">LIKE '%pro%'</td>
                </tr>
                <tr>
                    <td className="p-2"><code>in</code></td>
                    <td className="p-2">In</td>
                    <td className="p-2">*</td>
                    <td className="p-2">{'{ "op": "in", "val": ["red", "blue"] }'}</td>
                    <td className="p-2">IN ('red', 'blue')</td>
                </tr>
                <tr>
                    <td className="p-2"><code>not_in</code></td>
                    <td className="p-2">Not In</td>
                    <td className="p-2">*</td>
                    <td className="p-2">{'{ "op": "not_in", "val": [1, 3, 5] }'}</td>
                    <td className="p-2">NOT IN (1, 3, 5)</td>
                </tr>
                <tr>
                    <td className="p-2"><code>bracked_in</code></td>
                    <td className="p-2">Open Bracket</td>
                    <td className="p-2">N/A</td>
                    <td className="p-2">{'{ "op": "bracked_in" }'}</td>
                    <td className="p-2">Adds an opening bracket to the filter string</td>
                </tr>
                <tr>
                    <td className="p-2"><code>bracked_out</code></td>
                    <td className="p-2">Close Bracket</td>
                    <td className="p-2">N/A</td>
                    <td className="p-2">{'{ "op": "bracked_out" }'}</td>
                    <td className="p-2">Adds a closing bracket to the filter string</td>
                </tr>
                <tr>
                    <td className="p-2"><code>con</code></td>
                    <td className="p-2">Logical Conjunction</td>
                    <td className="p-2">N/A</td>
                    <td className="p-2">{'{ "con": "and" }'}</td>
                    <td className="p-2">Adds AND to the existing filter string</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Select;

