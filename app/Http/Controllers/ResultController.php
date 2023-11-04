<?php

namespace App\Http\Controllers;

use App\Models\AnnouncedPUResults;
use App\Models\Lga;
use App\Models\Party;
use App\Models\PollingUnit;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia; // We are going to use this class to render React components


class ResultController extends Controller
{
    public function index()
    {
        return Inertia::render('Q1Table', [
            'pollings' => PollingUnit::with("lga")->get()
        ]);
    }
    public function pollingUnit(string $id)
    {
        $pollingUnitResults = AnnouncedPUResults::where("polling_unit_uniqueid", $id)->get();
        $pollingUnit = PollingUnit::find($id);
        return Inertia::render('MainQ1Answer', [
            'pollingUnitResults' => $pollingUnitResults,
            'pollingUnit' => $pollingUnit,
            "lga" => $pollingUnit->lga
        ]);
    }

    public function q2page()
    {
        return Inertia::render('Q2Page', [
            'lgas' => Lga::all()
        ]);
    }
    public function q2fetch(Request $request, $id)
    {
        $pollingUnit = Lga::find($id)->announcedPUResults()->sum("party_score");

        return response()->json(['total' => $pollingUnit]);
    }
    public function q3page()
    {
        return Inertia::render('Q3Page', [
            'lgas' => Lga::all(),
            'pollings' => PollingUnit::all(),
            'parties' => Party::all(),
        ]);
    }
    public function submit(Request $request): RedirectResponse
    {
        $request->validate([
            'pollingUnit' => ['required'],
            'polParty' => ['required'],
            'votes' => ['required'],
            'by' => ['required']
        ]);

        AnnouncedPUResults::create([
            'polling_unit_uniqueid' => $request['pollingUnit'],
            'party_abbreviation' => $request['polParty'],
            'party_score' => $request['votes'],
            'entered_by_user' => $request['by'],
            'user_ip_address' => $request->ip()
        ]);

        return redirect('/');
    }
}
