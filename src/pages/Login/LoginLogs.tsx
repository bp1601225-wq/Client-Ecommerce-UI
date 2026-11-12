import { useEffect, useState } from "react";
import { LoaderCircle, RefreshCw, Search, Activity } from "lucide-react";
import API, { handleAxiosError } from "../../components/configuration/API";

interface LogType {
  user: {
    id: string;
    fullName: string;
    email: string;
  } | null;
  loggedAt: string;
  userAgent: string | null;
  ipAddress: string | null;
}

const Logs = () => {
  const [logs, setLogs] = useState<LogType[]>([]);
  const [loading, setLoading] = useState(true);

  const GetLogs = async () => {
    try {
      setLoading(true);
      const response = await API.get("/authenticate-logs");
      const { data, success } = response.data;

      if (success) setLogs(data || []);
    } catch (error) {
      handleAxiosError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetLogs();
  }, []);

  return (
    <div className="space-y-2 text-[12px] text-black p-3">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xs font-semibold">Activity Logs</h2>
          <p className="text-[9px] text-gray-500">
            Monitor user activities and login records
          </p>
        </div>

        <button
          onClick={GetLogs}
          disabled={loading}
          className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 text-[9px] hover:border-[#fd7e02]"
        >
          <RefreshCw size={11} />
          Refresh
        </button>
      </div>

      {/* Filters - UI only */}
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
        <div className="relative">
          <Search
            size={11}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search user..."
            className="w-full rounded border border-gray-200 py-1 pl-6 pr-2 text-[9px] outline-none focus:border-[#fd7e02]"
          />
        </div>

        <select className="rounded border border-gray-200 px-2 py-1 text-[9px] outline-none focus:border-[#fd7e02]">
          <option value="">All Activities</option>
          <option value="LOGIN">Login</option>
          <option value="LOGOUT">Logout</option>
          <option value="USER_CREATED">User Created</option>
        </select>

        <input
          type="date"
          className="rounded border border-gray-200 px-2 py-1 text-[9px] outline-none focus:border-[#fd7e02]"
        />
      </div>

      {loading && (
        <div className="flex justify-center items-center gap-2 py-8 text-gray-500">
          <LoaderCircle size={14} className="animate-spin text-[#fd7e02]" />
          <span>Loading logs...</span>
        </div>
      )}

      {!loading && logs.length === 0 && (
        <div className="flex flex-col items-center py-8 text-gray-400">
          <Activity size={20} />
          <p className="mt-1 font-medium text-black">No logs available</p>
          <p className="text-[9px]">Activity records will appear here.</p>
        </div>
      )}

      {!loading && logs.length > 0 && (
        <div className="overflow-x-auto rounded border border-gray-200">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-2 py-1.5 font-medium">User</th>
                <th className="px-2 py-1.5 font-medium">Email</th>
                <th className="px-2 py-1.5 font-medium">IP Address</th>
                <th className="px-2 py-1.5 font-medium">Browser / Device</th>
                <th className="px-2 py-1.5 font-medium">Logged At</th>
              </tr>
            </thead>

            <tbody>
              {logs.map((log, index) => (
                <tr
                  key={`${log.loggedAt}-${index}`}
                  className="border-t border-gray-100 hover:bg-orange-50/40"
                >
                  <td className="px-2 py-2 font-semibold">
                    {log.user?.fullName || "Unknown"}
                  </td>

                  <td className="px-2 py-2 text-gray-500">
                    {log.user?.email || "—"}
                  </td>

                  <td className="px-2 py-2">
                    <span className="rounded bg-orange-50 px-1.5 py-0.5 text-[#fd7e02]">
                      {log.ipAddress || "Unavailable"}
                    </span>
                  </td>

                  <td className="max-w-[180px] truncate px-2 py-2 text-gray-500">
                    {log.userAgent || "—"}
                  </td>

                  <td className="whitespace-nowrap px-2 py-2 text-gray-500">
                    {new Date(log.loggedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default Logs;