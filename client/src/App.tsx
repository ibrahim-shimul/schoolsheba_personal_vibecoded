import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AuthPage from "@/pages/auth";
import DashboardHome from "@/pages/dashboard";
import WebsiteEditor from "@/pages/dashboard/edit";
import Profile from "@/pages/dashboard/profile";
import Billing from "@/pages/dashboard/billing";

// Premium Dashboard
import PremiumDashboardHome from "@/pages/dashboard/premium";
import StudentsDirectory from "@/pages/dashboard/premium/students";
import AddStudent from "@/pages/dashboard/premium/add-student";
import AcademicManagement from "@/pages/dashboard/premium/academic";
import ClassDetails from "@/pages/dashboard/premium/class-details";
import AttendanceSystem from "@/pages/dashboard/premium/attendance";
import ExamsManagement from "@/pages/dashboard/premium/exams";
import AccountsManagement from "@/pages/dashboard/premium/accounts";
import HRManagement from "@/pages/dashboard/premium/hr";

import PortfolioTemplate from "@/pages/portfolio/demo";
import PublicPortfolioPage from "@/pages/portfolio/public";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/dashboard" component={DashboardHome} />
      <Route path="/dashboard/edit" component={WebsiteEditor} />
      <Route path="/dashboard/profile" component={Profile} />
      <Route path="/dashboard/billing" component={Billing} />
      
      {/* Premium Dashboard Routes */}
      <Route path="/dashboard/premium" component={PremiumDashboardHome} />
      <Route path="/dashboard/premium/students" component={StudentsDirectory} />
      <Route path="/dashboard/premium/students/add" component={AddStudent} />
      <Route path="/dashboard/premium/academic" component={AcademicManagement} />
      <Route path="/dashboard/premium/academic/class/:id" component={ClassDetails} />
      <Route path="/dashboard/premium/attendance" component={AttendanceSystem} />
      <Route path="/dashboard/premium/exams" component={ExamsManagement} />
      <Route path="/dashboard/premium/accounts" component={AccountsManagement} />
      <Route path="/dashboard/premium/hr" component={HRManagement} />
      
      <Route path="/portfolio/demo" component={PortfolioTemplate} />
      <Route path="/portfolio/:slug" component={PublicPortfolioPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
