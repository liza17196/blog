<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Тема</th>
                  <th>Раздел</th>
                  <th>Когда создана</th>
                  <th>Последнее обновление</th>
                </tr>
              </thead>
              @foreach(Auth::user()->topics as $topic)
              <tbody>
                <tr>
                  <td><a href="/posts/{{ $topic->id }}">{{ $topic->title }}</a></td>
                  <td>{{ $topic->section->section }}</td>
                  <td>{{ $topic->created_at->toFormattedDateString() }}</td>
                  <td>{{ $topic->updated_at->toFormattedDateString() }}</td>
                </tr>
              </tbody>
              @endforeach
            </table>
          </div>