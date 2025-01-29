"use client";

import { Methods } from "@/constants/enum";
import { useState, useEffect } from "react";
import { networkRequest } from "@/services/api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { jobService } from "@/services/job.service";

export default function JobApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pages: 1,
    totalRecords: 0,
    perPage: 10,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplications(pagination.currentPage);
  }, [pagination.currentPage]);

  const fetchApplications = async (page) => {
    try {
      setLoading(true);
      const response = await jobService.getAppliedJobs({page, perPage: pagination.perPage});
      console.log("response", response);
      if (response.data) {
        setApplications(response.data.records);
        setPagination(response.data.paginationInfo);
      }
    } catch (error) {
      console.error("Error fetching job applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Applications</h1>
        <span className="text-sm text-muted-foreground">
          Total Records: {pagination.totalRecords}
        </span>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              {/* Add more table headers based on your JobApplication interface */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={1} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            ) : applications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={1} className="text-center py-8">
                  No applications found
                </TableCell>
              </TableRow>
            ) : (
              applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>{app.id}</TableCell>
                  {/* Add more table cells based on your JobApplication interface */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1 || loading}
          variant="outline"
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {pagination.currentPage} of {pagination.pages}
        </span>
        <Button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={pagination.currentPage === pagination.pages || loading}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
