<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnouncedPUResults extends Model
{
    use HasFactory;

    protected $table = 'announced_pu_results';

    protected $primaryKey = "result_id";

    protected $fillable = ['polling_unit_uniqueid', 'party_abbreviation', 'party_score', 'entered_by_user', 'user_ip_address'];

    const CREATED_AT = 'date_entered';

    const UPDATED_AT = null;
}
