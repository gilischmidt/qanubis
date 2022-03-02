<?php

namespace App\Http\Controllers\Portal;

class HomeController extends Controller
{

    public function index()
    {
        $totalProjects = $this->user()->projects()->count();
        $projects = $this->user()->projects()->withCount(['documents', 'codes', 'quotes', 'memos'])
            ->autoWhere()->autoSort(['name'])->get();


        return view('app.portal.home', compact('projects', 'totalProjects'));
    }
}
