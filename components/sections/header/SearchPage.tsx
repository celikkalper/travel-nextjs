import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchPage = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 hidden lg:flex bg-sky-400 cursor-pointer text-white rounded-full">
          <Search size={16} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-gray-100 border-none shadow-none">
        <DialogTitle className="text-sky-500 text-shadow-2xs font-bold">Looking for Something?</DialogTitle>
        <div className="mt-8 flex flex-row items-center justify-center gap-2">
          <Input className="w-full py-6 border-sky-500" />
        </div>
        <Button className="bg-sky-500 text-white hover:bg-sky-600 transition duration-300 py-6">
            <Search size={16} className="text-white" />
          </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SearchPage;
